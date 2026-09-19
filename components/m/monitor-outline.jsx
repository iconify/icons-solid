import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nfj-kyfix.css';
import '../../css/j/j0hmkbc4a.css';
import '../../css/e/egn_sr01y.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="nfj-kyfix"/><path clip-rule="evenodd" class="j0hmkbc4a"/><path clip-rule="evenodd" class="egn_sr01y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:monitor-outline"} {...others} />);
}

export default Component;
