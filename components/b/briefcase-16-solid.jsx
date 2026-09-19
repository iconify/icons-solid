import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ii5d476rw.css';
import '../../css/h/hqx9vqk3m.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="ii5d476rw"/><path class="hqx9vqk3m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:briefcase-16-solid"} {...others} />);
}

export default Component;
