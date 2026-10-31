import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bq-rkobcn.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="bq-rkobcn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:heart-in-eaved-gabled-building-with-chimney"} {...others} />);
}

export default Component;
