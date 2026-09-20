import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xnf8da_ht.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="xnf8da_ht"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:bookmark-fill"} {...others} />);
}

export default Component;
