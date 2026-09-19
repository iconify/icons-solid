import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zm_zrzfjk.css';
import '../../css/v/vsuxsc7gj.css';
import '../../css/o/o25-t-hzf.css';
import '../../css/t/thwemd3eh.css';
import '../../css/c/c-jks692x.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGptGIUXXV"><g class="ft5dv1b6b"><path class="zm_zrzfjk"/><path class="vsuxsc7gj"/><path class="o25-t-hzf"/><circle class="thwemd3eh"/><path class="c-jks692x"/></g></mask></defs><path mask="url(#SVGptGIUXXV)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:ssd"} {...others} />);
}

export default Component;
