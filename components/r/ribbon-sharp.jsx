import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yzm_txj8c.css';
import '../../css/g/gqct9gbdf.css';
import '../../css/i/ib9od1bqw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yzm_txj8c"/><circle class="gqct9gbdf"/><path class="ib9od1bqw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:ribbon-sharp"} {...others} />);
}

export default Component;
