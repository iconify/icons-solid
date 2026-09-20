import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/el_l0sbow.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="el_l0sbow"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:logo-adobe-lightroom-filled"} {...others} />);
}

export default Component;
