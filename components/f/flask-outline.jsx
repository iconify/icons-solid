import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s-wvqqbgn.css';
import '../../css/k/k6cv4hiap.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s-wvqqbgn"/><path clip-rule="evenodd" class="k6cv4hiap"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:flask-outline"} {...others} />);
}

export default Component;
