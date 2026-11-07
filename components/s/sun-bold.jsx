import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r9iqk5btj.css';
import '../../css/u/upjyccctb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r9iqk5btj"/><path clip-rule="evenodd" class="upjyccctb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sun-bold"} {...others} />);
}

export default Component;
