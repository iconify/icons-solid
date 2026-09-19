import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z59rc0x6w.css';
import '../../css/k/k70t2o__t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z59rc0x6w"/><path class="k70t2o__t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:atom"} {...others} />);
}

export default Component;
