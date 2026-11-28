import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/odzk71pzi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="odzk71pzi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:aperture-solid"} {...others} />);
}

export default Component;
