import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z9gf4ebfj.css';
import '../../css/h/hnvtq9frh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z9gf4ebfj"/><path clip-rule="evenodd" class="hnvtq9frh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:washing-machine-filled"} {...others} />);
}

export default Component;
