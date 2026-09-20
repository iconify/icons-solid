import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mmi0wdbos.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mmi0wdbos"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:file-check-fill"} {...others} />);
}

export default Component;
