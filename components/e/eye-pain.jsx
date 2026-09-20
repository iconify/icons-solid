import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mgoy0ab0m.css';
import '../../css/d/dd5bkjbnw.css';
import '../../css/c/c__1nwb2i.css';
import '../../css/d/dlgof86cm.css';
import '../../css/x/xtz0lmbqj.css';
import '../../css/s/ss9tdmbfp.css';
import '../../css/n/nhgf61bje.css';
import '../../css/y/y1reyt_5c.css';

const viewBox = {"width":72,"height":72};
const content = `<ellipse class="mgoy0ab0m"/><circle class="dd5bkjbnw"/><ellipse class="c__1nwb2i"/><circle class="dlgof86cm"/><circle class="xtz0lmbqj"/><circle class="ss9tdmbfp"/><path class="nhgf61bje"/><path class="y1reyt_5c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:eye-pain"} {...others} />);
}

export default Component;
