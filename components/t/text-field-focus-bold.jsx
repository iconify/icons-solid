import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e2d8zobch.css';
import '../../css/u/urrp9ssxh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e2d8zobch"/><path clip-rule="evenodd" class="urrp9ssxh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:text-field-focus-bold"} {...others} />);
}

export default Component;
