import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9qc58bsw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s9qc58bsw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uit:document-layout-left"} {...others} />);
}

export default Component;
