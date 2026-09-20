import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fv9jb6bsr {
  fill: var(--svg-color--24dd7b, #24dd7b);
  d: path("M10.031 4.719L13.97 3v4.5h5.062v3.375H13.97v5.282c0 1.656 2.9 1.845 3.937 1.296l.932 2.862c-2.285 1.36-8.807 1.035-8.807-4.13zm-3.33 6.831c-.959 0-1.732-.963-1.732-2.151s.782-2.142 1.74-2.142c.967 0 1.74.954 1.74 2.142c0 1.179-.773 2.142-1.74 2.142z");
}
</style><path class="fv9jb6bsr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:tkn"} {...others} />);
}

export default Component;
