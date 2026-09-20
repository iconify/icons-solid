import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2l9m1bnq.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="d2l9m1bnq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:flu-mask-remix"} {...others} />);
}

export default Component;
