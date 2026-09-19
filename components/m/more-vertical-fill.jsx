import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rt67l6e-s.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="rt67l6e-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:more-vertical-fill"} {...others} />);
}

export default Component;
