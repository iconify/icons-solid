import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/guoh-hbsb.css';
import '../../css/j/jjbqhzpum.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="guoh-hbsb"/><path class="jjbqhzpum"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:cancel-photo-fill"} {...others} />);
}

export default Component;
