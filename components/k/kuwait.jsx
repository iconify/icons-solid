import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x7ephwb-o.css';
import '../../css/g/gk5dn-bts.css';
import '../../css/r/r6ariacwh.css';
import '../../css/z/z00sw9avu.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="x7ephwb-o"/><path class="gk5dn-bts"/><path class="r6ariacwh"/><path class="z00sw9avu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:kuwait"} {...others} />);
}

export default Component;
