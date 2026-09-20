import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dol_h130o.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="dol_h130o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:prescription-pills-drugs-healthcare-flat"} {...others} />);
}

export default Component;
