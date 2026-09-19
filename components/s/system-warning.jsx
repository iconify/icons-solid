import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sunnwjbfh.css';
import '../../css/k/k6q-kjzhj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sunnwjbfh"/><path class="k6q-kjzhj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:system-warning"} {...others} />);
}

export default Component;
