import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p2t00mbrv.css';
import '../../css/n/nb3vh0bqp.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="p2t00mbrv"/><path class="nb3vh0bqp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-flutter"} {...others} />);
}

export default Component;
