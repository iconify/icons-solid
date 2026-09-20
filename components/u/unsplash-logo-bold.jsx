import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z4fw52b1f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z4fw52b1f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:unsplash-logo-bold"} {...others} />);
}

export default Component;
