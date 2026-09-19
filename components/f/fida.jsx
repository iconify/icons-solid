import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r6vjbh0jo.css';
import '../../css/m/md286fbip.css';
import '../../css/z/z6_xubutl.css';
import '../../css/p/p3vtzvt9i.css';
import '../../css/w/w8ovneb7u.css';
import '../../css/i/i6su_sbpa.css';
import '../../css/p/plbvnybyp.css';
import '../../css/e/eref2ibtw.css';
import '../../css/d/d5dx0hjlh.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><circle class="r6vjbh0jo"/><g class="md286fbip"><path class="z6_xubutl"/><path class="p3vtzvt9i"/><path class="w8ovneb7u"/><path class="i6su_sbpa"/><path class="plbvnybyp"/><path class="eref2ibtw"/><path class="d5dx0hjlh"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:fida"} {...others} />);
}

export default Component;
