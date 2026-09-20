import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/afqh7e3uc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="afqh7e3uc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:glasses-line"} {...others} />);
}

export default Component;
