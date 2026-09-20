import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mbpy0ib_u.css';
import '../../css/d/doei1kbpv.css';
import '../../css/m/my85rfpjo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="mbpy0ib_u"/><path class="doei1kbpv"/><path clip-rule="evenodd" class="my85rfpjo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:play-list-1-flat"} {...others} />);
}

export default Component;
