import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x9cv03zhd.css';
import '../../css/y/ywys0bcog.css';
import '../../css/m/ma0-lhh3s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x9cv03zhd"/><path class="ywys0bcog"/><path class="ma0-lhh3s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:wifi-signal-2-bold"} {...others} />);
}

export default Component;
