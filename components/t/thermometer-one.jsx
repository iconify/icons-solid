import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_kwlg0w.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="v3_kwlg0w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:thermometer-one"} {...others} />);
}

export default Component;
