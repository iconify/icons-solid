import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wb-bq1nyz.css';
import '../../css/l/lofqyubof.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wb-bq1nyz"/><path class="lofqyubof"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chef-hat-bold"} {...others} />);
}

export default Component;
