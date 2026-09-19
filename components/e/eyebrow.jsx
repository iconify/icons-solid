import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ylrso7y3c.css';
import '../../css/g/g98cyacwp.css';
import '../../css/j/jgum0gesx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGdiy1FdmM"><g class="ylrso7y3c"><path class="g98cyacwp"/><path class="jgum0gesx"/></g></mask></defs><path mask="url(#SVGdiy1FdmM)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:eyebrow"} {...others} />);
}

export default Component;
