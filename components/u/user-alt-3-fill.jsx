import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rop6in0iw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rop6in0iw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:user-alt-3-fill"} {...others} />);
}

export default Component;
