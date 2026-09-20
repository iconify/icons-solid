import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sd5i1ccgy.css';
import '../../css/b/bp38xibkr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sd5i1ccgy"/><path class="bp38xibkr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:email-action-warning-bold"} {...others} />);
}

export default Component;
