import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/plnf21w4w.css';
import '../../css/f/fowt9fbln.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="plnf21w4w"/><path class="fowt9fbln"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:finger-touch-filled"} {...others} />);
}

export default Component;
