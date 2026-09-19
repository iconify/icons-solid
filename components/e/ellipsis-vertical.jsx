import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j5u9w_zfh.css';
import '../../css/z/z9shncc0q.css';
import '../../css/o/ou5gtwb5g.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="nrj6p8qat"><circle class="j5u9w_zfh"/><circle class="z9shncc0q"/><circle class="ou5gtwb5g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bytesize:ellipsis-vertical"} {...others} />);
}

export default Component;
