import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/k/k2ksg3lap.css';
import '../../css/k/kjnorp87f.css';
import '../../css/j/jh4i9pblc.css';
import '../../css/g/gwryfvmtr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGYu90ycYC"><g class="wwvp95byt"><path class="k2ksg3lap"/><path class="kjnorp87f"/><path class="jh4i9pblc"/><path class="gwryfvmtr"/></g></mask></defs><path mask="url(#SVGYu90ycYC)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:database-forbid"} {...others} />);
}

export default Component;
