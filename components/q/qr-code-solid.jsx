import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v73rypy0t.css';
import '../../css/d/dp85ht2pz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v73rypy0t"/><path class="dp85ht2pz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:qr-code-solid"} {...others} />);
}

export default Component;
