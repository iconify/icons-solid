import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h5kja2bmt.css';
import '../../css/q/qv0ny4dca.css';
import '../../css/d/dboargo5b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h5kja2bmt"/><path class="qv0ny4dca"/><path class="dboargo5b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:web-grid-alt"} {...others} />);
}

export default Component;
