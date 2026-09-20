import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xw2xxxbob.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="xw2xxxbob"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:ted-logo-solid"} {...others} />);
}

export default Component;
