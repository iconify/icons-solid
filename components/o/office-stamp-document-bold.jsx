import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gqk0_3bfl.css';
import '../../css/l/lgb7uffyh.css';
import '../../css/s/syaz7gedi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gqk0_3bfl"/><path class="lgb7uffyh"/><path class="syaz7gedi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:office-stamp-document-bold"} {...others} />);
}

export default Component;
