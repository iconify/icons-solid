import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/s/sunx62j5d.css';
import '../../css/p/pohpzj7cj.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGJYGrYcpv"><g class="ufeehvblu"><path class="sunx62j5d"/><path class="pohpzj7cj"/></g></mask></defs><path mask="url(#SVGJYGrYcpv)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:crown"} {...others} />);
}

export default Component;
