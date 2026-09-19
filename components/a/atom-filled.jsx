import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bo45y_b3k.css';
import '../../css/k/k70t2o__t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bo45y_b3k"/><path class="k70t2o__t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:atom-filled"} {...others} />);
}

export default Component;
