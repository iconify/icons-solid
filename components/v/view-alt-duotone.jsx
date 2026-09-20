import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o5pil4b6d.css';
import '../../css/v/v5wzyp5ut.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o5pil4b6d"/><circle class="v5wzyp5ut"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:view-alt-duotone"} {...others} />);
}

export default Component;
