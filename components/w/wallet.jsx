import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n4_6atnkp.css';
import '../../css/l/lnxi9kb0f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n4_6atnkp"/><circle class="lnxi9kb0f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"prime:wallet"} {...others} />);
}

export default Component;
