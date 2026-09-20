import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hjo1kcb7f.css';
import '../../css/v/vpwzyn_kv.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="hjo1kcb7f"/><path class="vpwzyn_kv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:pet-animals-frog"} {...others} />);
}

export default Component;
