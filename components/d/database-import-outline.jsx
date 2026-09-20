import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xm8lu6lmv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xm8lu6lmv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:database-import-outline"} {...others} />);
}

export default Component;
