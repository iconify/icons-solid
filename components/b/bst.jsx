import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m1hyk4bcd.css';
import '../../css/i/ipulo8bps.css';
import '../../css/u/us9k6caky.css';
import '../../css/n/ncdf36bgi.css';
import '../../css/k/kznbvsbuq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m1hyk4bcd"/><path class="ipulo8bps"/><path class="us9k6caky"/><path class="ncdf36bgi"/><path class="kznbvsbuq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:bst"} {...others} />);
}

export default Component;
