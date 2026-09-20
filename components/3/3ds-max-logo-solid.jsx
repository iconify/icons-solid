import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gv0rs1cdm.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="gv0rs1cdm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:3ds-max-logo-solid"} {...others} />);
}

export default Component;
