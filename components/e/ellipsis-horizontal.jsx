import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/seobvyb4q.css';
import '../../css/z/z9shncc0q.css';
import '../../css/f/f34m3cxbq.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="nrj6p8qat"><circle class="seobvyb4q"/><circle class="z9shncc0q"/><circle class="f34m3cxbq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bytesize:ellipsis-horizontal"} {...others} />);
}

export default Component;
