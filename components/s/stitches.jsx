import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u8naembgy.css';
import '../../css/f/fow0mdbxw.css';
import '../../css/x/xaxzevb3j.css';
import '../../css/p/pz4dgsbkg.css';

const viewBox = {"width":64,"height":64};
const content = `<g clip-rule="evenodd" class="u8naembgy"><path class="fow0mdbxw"/><path class="xaxzevb3j"/><path class="pz4dgsbkg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:stitches"} {...others} />);
}

export default Component;
