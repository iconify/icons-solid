import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ct4qxub9t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ct4qxub9t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:casino-lucky-7"} {...others} />);
}

export default Component;
