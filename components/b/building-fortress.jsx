import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kbnv7fbxg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kbnv7fbxg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:building-fortress"} {...others} />);
}

export default Component;
