import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/temj2-uou.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="temj2-uou"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:git-branch-check"} {...others} />);
}

export default Component;
