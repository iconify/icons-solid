import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sqa3tkb1n.css';
import '../../css/b/bt2dk5_bq.css';
import '../../css/c/cy9cdxbcw.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="sqa3tkb1n"><path class="bt2dk5_bq"/><path class="cy9cdxbcw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:microscope-solid"} {...others} />);
}

export default Component;
